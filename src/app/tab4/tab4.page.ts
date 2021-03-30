import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  iFoto: string;
  constructor(private route: ActivatedRoute) {
    let iFoto = this.route.snapshot.paramMap.get('photo');
    this.iFoto = iFoto;
  }

  ngOnInit() {}
}
