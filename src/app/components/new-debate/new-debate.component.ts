import { Component } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service'; // Update the path

@Component({
  selector: 'app-new-debate',
  templateUrl: './new-debate.component.html',
  styleUrls: ['./new-debate.component.css']
})
export class NewDebateComponent {

  title: string = '';
  topic: string = '';
  descriptionHash: string = '';
  isTimed: boolean = false;
  expiryTime: number = 0;

  constructor(private providerService: ProviderService) {}

  async createDebate(): Promise<void> {
    try {
      const debateId = await this.providerService.createDebate(
        this.title,
        this.topic,
        this.descriptionHash,
        this.isTimed,
        this.expiryTime
      );
      console.log('New Debate Created with ID:', debateId);
      // Optionally, you can navigate to the all debates page or perform other actions.
    } catch (error) {
      console.error('Error creating debate:', error);
    }
  }
}
