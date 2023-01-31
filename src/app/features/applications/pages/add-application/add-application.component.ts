import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APP_CONFIG } from '@app/config/app.config';
import { AppConfig } from '@app/config/types';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'app-add-application',
  templateUrl: './add-application.component.html',
  styleUrls: ['./add-application.component.scss']
})
export class AddApplicationComponent {
  addApplicationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    policyNumber: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    asegurado: new FormControl('', [Validators.required]), // dropdown
    pagador : new FormControl('', [Validators.required]), //dropdown
    desde : new FormControl('', [Validators.required]), // texto
    hasta : new FormControl('', [Validators.required]),
    tipo_transporte : new FormControl('', [Validators.required]), //dropdown
    perteneciente : new FormControl('', [Validators.required]),
    fecha_embarque : new FormControl('', [Validators.required]),
    embarcado_por : new FormControl('', [Validators.required]),
    nota_de_pedido : new FormControl('', [Validators.required]), //dropdown
    incoterms_buscar : new FormControl('', [Validators.required]),
    orden_de_compra : new FormControl('', [Validators.required]),
    afianzador_de_aduana : new FormControl('', [Validators.required]),
    items : new FormControl('', [Validators.required]), // Dropdown
    marca : new FormControl('', [Validators.required]),
    descripcion_contenido : new FormControl('', [Validators.required]),
    num : new FormControl('', [Validators.required]),
    peso_bruto : new FormControl('', [Validators.required]),
    bultos : new FormControl('', [Validators.required]),
    observaciones : new FormControl('', [Validators.required]),
    monto_total_compra : new FormControl('', [Validators.required]),
    porcentaje_gastos_justificados : new FormControl('', [Validators.required]),
    suma_aseguradas : new FormControl('', [Validators.required]),
    tasa : new FormControl('', [Validators.required]),
    valor_prima : new FormControl('', [Validators.required]),
    cobertura : new FormControl('', [Validators.required]),
    deducible : new FormControl('', [Validators.required]),
    objeto_seguro : new FormControl('', [Validators.required])

  });

  constructor(
    private router: Router,
    private applicationService: ApplicationService,
    @Inject(APP_CONFIG) public appConfig: AppConfig
  ) { }

  onSubmit() {
    // Validate form
    /* if (!this.addApplicationForm.valid) {
      return;
    } */
    const request = {
      name: this.addApplicationForm.value.name ?? '',
      policyNumber: this.addApplicationForm.value.policyNumber ?? '',
      description: this.addApplicationForm.value.description ?? '',
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
