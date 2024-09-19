import { Component, OnInit } from '@angular/core';
import { ethers } from 'ethers';

import {ProviderService} from '../../services/provider.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  key: string;

  username: string;
  bio: string;
  picture: string;

  constructor(private providerService: ProviderService) {
    this.key =  localStorage.getItem('etherscan_key') || '';

    this.username = '';
    this.bio = '';
    this.picture = '';
    this.getProfileData();
    //this.providerService.createDebate('prva debata!!!', 'Najbolja tema', '0x123', false, 1);
  }


    setKey() : void {
    this.providerService.setKey(this.key);
  }

  setProfileData() : void {
    this.providerService.setProfileData(this.username, this.bio, this.picture);
  }

  getProfileData() : void {
    this.providerService.getProfileData()
        .then(res => {
          this.username = res.username;
          this.bio = res.bioHashIpfs;
          this.picture = res.profilePictureHashIpfs
    }).catch(err => console.log(err))
  }





}
