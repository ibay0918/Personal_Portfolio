import { Component, OnInit } from '@angular/core';
import { BehanceService } from '../behance.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: 'gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  projects: any;

  constructor(private _behanceService: BehanceService) { }

  ngOnInit() {
    this._behanceService.getProjects().subscribe(projects => {
      this.projects = projects.projects;
    })
  }

}
