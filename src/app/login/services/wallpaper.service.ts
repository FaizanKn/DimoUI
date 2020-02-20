import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class WallpaperService {
    
    private selectedWallpaperIndex : number = window.Math.ceil(window.Math.random() * 10) % 5;

    getWallpaperIndex(){
        return this.selectedWallpaperIndex;
    }

    getWallpaperClass(){
        return "bg-"+this.selectedWallpaperIndex;
    }
}