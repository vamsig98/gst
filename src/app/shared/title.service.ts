import { Injectable } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class TitleService extends Title {


    private recursivelyGenerateTitle(snapshot: ActivatedRouteSnapshot) {
        var titleParts = <string[]>[];
        if (snapshot) {
            if (snapshot.firstChild) {
                titleParts = this.recursivelyGenerateTitle(snapshot.firstChild);
            }

            if (snapshot.data['title']) {
                titleParts.push(snapshot.data['title']);
            }
        }

        return titleParts;
    }

    public GenerateTitle(snapshot: ActivatedRouteSnapshot) {
        this.setTitle(this.recursivelyGenerateTitle(snapshot).join(' - ') + " | GstGola.com");
    }

}