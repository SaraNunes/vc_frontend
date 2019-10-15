import { Component, OnInit, Input } from '@angular/core';
import { Video } from 'src/service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-video-tile',
  templateUrl: './video-tile.component.html',
  styleUrls: ['./video-tile.component.css']
})
export class VideoTileComponent implements OnInit {

  @Input() video: Video;
  constructor() { 
  }

  ngOnInit() {
  }

  cardClicked()
  {
    //clicked, to go video page
  }

  setClasses()
  {
    return ""
  }

 
  }

