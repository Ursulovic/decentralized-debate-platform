import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service'; // Update the path
import { Debate } from 'src/types/ContractModel'; // Update the path

@Component({
  selector: 'app-all-debates',
  templateUrl: './all-debates.component.html',
  styleUrls: ['./all-debates.component.css']
})
export class AllDebatesComponent implements OnInit {

  debates: Debate[] = []; // Initialize debates array

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.getAllDebates();
  }

  async getAllDebates(): Promise<void> {
    try {
      this.debates = await this.providerService.getAllDebates();
      console.log('All Debates:', this.debates);
    } catch (error) {
      console.error('Error fetching debates:', error);
    }
  }
}
