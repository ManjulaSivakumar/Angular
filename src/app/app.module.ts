import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { ChildComponent } from './nuclearfamily/child/child.component';
import { ReviewComponent } from './review/review/review.component';
import { TitleComponent } from './review/title/title.component';
import { ThumbnailComponent } from './review/thumbnail/thumbnail.component';
import { DescriptionComponent } from './review/description/description.component';
import { DirectiveComponent } from './super-html/directive/directive.component';
import { RouterModule } from '@angular/router';
import { InbuiltComponent } from './pipes/inbuilt/inbuilt.component';
import { BadrouteComponent } from './notfound/badroute/badroute.component';
import { Consume1Component } from './AngularServices/consume1/consume1.component';
import { Consume2Component } from './AngularServices/consume2/consume2.component';
import { ConsumeparentComponent } from './AngularServices/consumeparent/consumeparent.component';
import { Child1Component } from './AngularServices/child1/child.component';
import { ReactiveformComponent } from './forms/reactiveform/reactiveform.component';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { AnimationComponent } from './animate/animation/animation.component';



@NgModule({
  declarations: [
    AppComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    ChildComponent,
    ReviewComponent,
    TitleComponent,
    ThumbnailComponent,
    DescriptionComponent,
    DirectiveComponent,
    InbuiltComponent,
    BadrouteComponent,
    Consume1Component,
    Consume2Component,
    ConsumeparentComponent,
    Child1Component,
    ReactiveformComponent,
    TemplateformComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,  
    BrowserAnimationsModule, 
    RouterModule.forRoot([
      {
        path:'',
        redirectTo:'pipes',
        pathMatch:'full'
      },
      {
        path:'family',
        component:FamilyComponent,
        children:[
          {
            path:'',
            redirectTo:'mother',
            pathMatch:'full'
          },
          {
            path:'father',
            component:FatherComponent
          },
          {
            path:'mother',
            component:MotherComponent
          },
          {
            path:'child',
            component:ChildComponent
          }
        ]
      },
      {
        path:'review',
        component:ReviewComponent
      },
      {
        path:'directive',
        component:DirectiveComponent
      },
      {
        path:'pipes',
        component:InbuiltComponent
      },
      {
        path:'consumeservice',
        component:ConsumeparentComponent,
        children: [
          {
            path: 'consumeservice1',
            component:Consume1Component
          },
          {
            path: 'consumeservice2',
            component:Consume2Component
          }
        ]
      },
      {
        path:'template',
        component:TemplateformComponent
      },
      {
        path:'reactive',
        component:ReactiveformComponent
      },
      {
        path:'animation',
        component:AnimationComponent
      },
      
      {
        path:'**',
        component:BadrouteComponent
      },

    ])
  ],  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
