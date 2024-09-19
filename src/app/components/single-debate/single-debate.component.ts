import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProviderService } from 'src/app/services/provider.service';
import { DebateWithReplies } from 'src/types/ContractModel';

@Component({
  selector: 'app-single-debate',
  templateUrl: './single-debate.component.html',
  styleUrls: ['./single-debate.component.css']
})
export class SingleDebateComponent implements OnInit {
  debateWithReplies: DebateWithReplies | null = null;
  debateId!: number;
  newReplyContent: string = ''; // The new reply content

  usernames: { [address: string]: string } = {};


  constructor(
    private providerService: ProviderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.debateId = params['id'];
      this.loadDebateWithReplies();
    });
  }

  async loadDebateWithReplies(): Promise<void> {
    this.debateWithReplies = await this.providerService.getDebateWithReplies(this.debateId);

    if (this.debateWithReplies) {
      for (const reply of this.debateWithReplies.replies) {
        // Check if we already have the username cached
        if (!this.usernames[reply.creator]) {
          // Fetch and cache the username
          const profileData = await this.providerService.getUsernameForAddress(reply.creator);
          this.usernames[reply.creator] = profileData ? profileData : reply.creator;
        }
      }
    }
  }

  async submitReply(): Promise<void> {
    // You would typically want to upload content to IPFS first to get the hash
    // The following assumes the IPFS hash is in newReplyContent
    if (!this.newReplyContent) {
      alert('Reply content cannot be empty.');
      return;
    }

    try {
      await this.providerService.createNewReply(this.debateId, this.newReplyContent);
      // Clear the input field on successful submission
      this.newReplyContent = '';
      // Optionally, refresh the debate to show the new reply
      await this.loadDebateWithReplies();
    } catch (error) {
      console.error('Error submitting reply:', error);
      alert('There was an error submitting your reply.');
    }
  }
}
