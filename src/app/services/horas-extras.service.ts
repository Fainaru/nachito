import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HorasExtrasService {
  private datos: BehaviorSubject<any | undefined> = new BehaviorSubject(null);
  constructor(private firestore: Firestore) {
  }

  obtener(){
    return this.datos.asObservable();
  }

  ingresar(data: any) {
    const ref = collection(this.firestore, 'horas-extras');
    return addDoc(ref, data);
  }

  buscar() {
    const ref = collection(this.firestore, 'horas-extras');
    collectionData(ref).subscribe((data) => {
      this.datos.next(data)
    });
  }
}
