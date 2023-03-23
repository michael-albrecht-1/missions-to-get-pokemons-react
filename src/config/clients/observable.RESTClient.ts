import { Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { RESTClient } from "./RESTClient";

export class ObservableRESTClient implements RESTClient {
  get<R>(endpoint: string): Observable<R> {
    return ajax.getJSON<R>(endpoint);
  }
  post<R>(endpoint: string, body: any): Observable<R> {
    return ajax.post(endpoint, body) as Observable<R>;
  }
  patch<R>(endpoint: string, body: any): Observable<R> {
    return ajax.patch(endpoint, body) as Observable<R>;
  }
}
