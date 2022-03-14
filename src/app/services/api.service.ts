import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class apiService {
    public host: String = environment.host;
    private options = {
        withCredentials: true
    };

    public constructor(private http: HttpClient) { }

    public get(resource: string, params: any): Promise<any> {
        return this.http.get(this.host + resource + params, this.options).toPromise();
    }

    public post(resource: string, params: any): Promise<any> {
        return this.http.post(this.host + resource, params, this.options).toPromise();
    }

    public put(resource: string, params: any): Promise<any> {
        return this.http.put(this.host + resource, params, this.options).toPromise();
    }

    public delete(resource: string): Promise<any> {
        return this.http.delete(this.host + resource, this.options).toPromise();
    }

    public donwload(resource: string, params: any): Observable<any> {
        return this.http.get(this.host + resource + params, this.options);
    }
}
