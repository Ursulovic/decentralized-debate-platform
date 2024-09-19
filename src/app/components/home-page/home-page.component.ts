import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  websiteInfo = {
    about: "This is decetralized debate platform built for freely sharing ideas and expressing opinions.",
    technologies: ["IPFS for content storage", "Ethereum for storing register of IPFS files", "Solidity for writting smart contract", "Address of contract: 0x6084d803B766c87cD00693FC88C36b5Ece6aB89C"],
    contact: {
      name: "Ivan Ursulovic",
      email: "ivanursulovic@pm.me",
      phone: "+381640512212"
    }
  };

  constructor() {}
}
