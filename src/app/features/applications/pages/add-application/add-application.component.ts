import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG } from '@app/config/app.config';
import { AppConfig } from '@app/config/types';
import { ApplicationService } from '../../services/application.service';
import { AddApplication } from '../../services/types';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent {
  addApplicationForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
    desde: new FormControl('', [Validators.required]), // texto
    hasta: new FormControl('', [Validators.required]),
    tipoTransporte: new FormControl('', [Validators.required]), //dropdown
    perteneciente: new FormControl('', [Validators.required]),
    fechaEmbarque: new FormControl(new Date(), [Validators.required]),
    fechaLlegada: new FormControl(new Date(), [Validators.required]),
    embarcadoPor: new FormControl('', [Validators.required]),
    notaDePedido: new FormControl('', [Validators.required]), //dropdown
    ordenDeCompra: new FormControl('', [Validators.required, Validators.min(0)]),

    marca: new FormControl('', [Validators.required]),
    descripcionContenido: new FormControl('', [Validators.required]),
    pesoBruto: new FormControl('', [Validators.required]),
    observaciones: new FormControl('', [Validators.required]),
    montoTotalCompra: new FormControl('', [Validators.required]),
    porcentajeGastosJustificados: new FormControl('', [Validators.required]),
    sumaAseguradas: new FormControl('', [Validators.required]),
    tasa: new FormControl('', [Validators.required]),
    valorPrima: new FormControl('', [Validators.required]),
    cobertura: new FormControl('', [Validators.required]),
    deducible: new FormControl('', [Validators.required]),
    objetoSeguro: new FormControl('', [Validators.required])
  });

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    @Inject(APP_CONFIG) public appConfig: AppConfig
  ) {
    this.addApplicationForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    const request: AddApplication = {
      description: this.addApplicationForm.get('description')?.value!,
      desde: this.addApplicationForm.get('desde')?.value!,
      hasta: this.addApplicationForm.get('hasta')?.value!,
      tipoTransporte: this.addApplicationForm.get('tipoTransporte')?.value!,
      perteneciente: this.addApplicationForm.get('perteneciente')?.value!,
      fechaEmbarque: new Date(this.addApplicationForm.get('fechaEmbarque')?.value!),
      fechaLlegada: new Date(this.addApplicationForm.get('fechaLlegada')?.value!),
      embarcadoPor: this.addApplicationForm.get('embarcadoPor')?.value!,
      notaDePedido: this.addApplicationForm.get('notaDePedido')?.value!,
      ordenDeCompra: Number(this.addApplicationForm.get('ordenDeCompra')?.value!),

      marca: this.addApplicationForm.get('marca')?.value!,
      descripcionContenido: this.addApplicationForm.get('descripcionContenido')?.value!,
      pesoBruto: Number(this.addApplicationForm.get('pesoBruto')?.value!),
      observaciones: this.addApplicationForm.get('observaciones')?.value!,
      montoTotalCompra: Number(this.addApplicationForm.get('montoTotalCompra')?.value!),
      porcentajeGastosJustificados: Number(this.addApplicationForm.get('porcentajeGastosJustificados')?.value!),
      sumaAseguradas: Number(this.addApplicationForm.get('sumaAseguradas')?.value!),
      tasa: Number(this.addApplicationForm.get('tasa')?.value!),
      valorPrima: Number(this.addApplicationForm.get('valorPrima')?.value!),
      cobertura: this.addApplicationForm.get('cobertura')?.value!,
      deducible: Number(this.addApplicationForm.get('deducible')?.value!),
      objetoSeguro: this.addApplicationForm.get('objetoSeguro')?.value!
    };
    this.applicationService.addApplication(request)
      .subscribe({
        complete: () => {
          console.log('ApplicationService.addApplication() complete');
        },
        error: (error) => {
          console.error('ApplicationService.addApplication() error:', error);
        }
      });
    this.router.navigate([this.appConfig.routes.applications.fullPath]);
  }

}
