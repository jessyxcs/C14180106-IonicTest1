import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  constructor(private route: ActivatedRoute) {}

  iFoto: string;

  ngOnInit() {
    // let iFoto = this.route.snapshot.paramMap.get('photo');
  }

  async ionViewDidEnter() {
    let iFoto = this.route.snapshot.paramMap.get('photo');
    this.iFoto = iFoto;
  }
}
