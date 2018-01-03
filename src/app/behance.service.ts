import { Injectable } from '@angular/core';

//import { JsonpModule, Jsonp, Response } from '@angular/http';
import {Jsonp} from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class BehanceService {
  private username:string = 'dennisschafer';
  private api_key = 'qBwA4rTpVWcuxNSy7Ne4Es7aAlBtZunY';

  constructor(private _jsonp: Jsonp) { }

    getProjects() {
      return this._jsonp.get('http://www.behance.net/v2/users/'+this.username+'/projects?api_key='+this.api_key+'&callback=JSONP_CALLBACK')
        .map(res => res.json());
    }

    getProject(project_id) {
      return this._jsonp.get('http://www.behance.net/v2/projects/'+project_id+'?api_key='+this.api_key+'&callback=JSONP_CALLBACK')
        .map(res => res.json());
    }

}
