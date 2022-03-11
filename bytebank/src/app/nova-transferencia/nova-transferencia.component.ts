
import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { TransferenciaService } from "../services/transferencia.service";


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor: number = 0;
  destino: string = "";

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    const valorEmitir = {valor: this.valor, destino: this.destino}
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      this.router.navigateByUrl('extrato')
    });

    // this.aoTransferir.emit(valorEmitir);
  }
}
