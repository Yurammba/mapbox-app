import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';

@Component({
  selector: 'app-map-common',
  templateUrl: './map-common.component.html',
  styleUrls: ['./map-common.component.scss']
})
export class MapCommonComponent implements OnInit {
  map!: mapboxgl.Map;
  draw: MapboxDraw = new MapboxDraw({
    displayControlsDefault: false,
    controls: {
      polygon: true,
      trash: true
    },
    defaultMode: 'draw_polygon'
  });

  ngOnInit() {
    (mapboxgl as typeof mapboxgl).accessToken =
      'pk.eyJ1IjoibWFyb29uZWRpb25lIiwiYSI6ImNqdmp0MzB1azBpcDAzem1naHZwMjNndGIifQ.65nvvRg9QeFUV2c6b9W4Vw';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [37.6, 55.75],
      zoom: 9,
    });
    this.map.addControl(this.draw);
  }
}
