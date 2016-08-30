import { Component, OnInit, ViewChild } from '@angular/core';
import { SohoMenuButtonComponent } from '../../components/menu-button';

@Component({
    selector: 'toolbar-datadriven-demo',
    templateUrl: 'toolbar-datadriven.demo.html',
    directives: [
      SohoMenuButtonComponent
    ]
})
export class ToolbarDataDrivenDemoComponent implements OnInit {

  @ViewChild('sohoToolbar') sohoToolbar: any;

  private pageTitle: string;
  private sectionTitle: string;
  private buttons: Array<ToolbarButton> = [];
  private searchField: SearchField;

  constructor() {}

  ngOnInit() {

      this.pageTitle = 'Page Title';
      this.sectionTitle = 'Data Driven Toolbar';

      this.searchField = {
          id    : 'Search',
          label : 'Search Something'
      };

      this.buttons = this.buildToolbarButtonArray();

      setTimeout(() => {
        // Simulate an Ajax Request to add a new menu
        this.addNewMenu();

        setTimeout(() => {
          // Force change detection
          this.updated();
        }, 1);
      }, 100);
  }

  private buildToolbarButtonArray(): Array<ToolbarButton> {
    let buttons: Array<ToolbarButton> = [];

    buttons.push({
      id       : 'Create',
      data     : '{\'btn\' : \'create\'}',
      text     : 'Create',
      icon     : 'add',
      cssClass : 'btn-icon'
    });

    buttons.push({
      id       : 'charts-btn',
      data     : '{\'btn\' : \'charts\'}',
      icon     : 'pie-chart',
      cssClass : 'btn-menu',
      menu     : [
        {id: 'pie',    text: 'Pie Chart',    data: '{\'menu\': \'pie\'}'},
        {id: 'line',   text: 'Line Chart',   data: '{\'menu\': \'line\'}'},
        {id: 'bubble', text: 'Bubble Chart', data: '{\'menu\': \'bubble\'}'}
      ]
    });

    buttons.push({
      id       : 'update-btn',
      data     : '{\'btn\' : \'update\'}',
      text     : 'Open',
      icon     : 'folder',
      cssClass : 'btn-icon'
    });

    buttons.push({
      id       : 'delete-btn',
      data     : '{\'btn\' : \'delete\'}',
      text     : 'Delete',
      icon     : 'delete',
      cssClass : 'btn-icon'
    });

    buttons.push({
      id       : 'refresh-btn',
      data     : '{\'btn\' : \'refresh\'}',
      text     : 'Refresh',
      icon     : 'refresh',
      cssClass : 'btn-icon'
    });

    buttons.push({
      id       : 'actions-btn',
      data     : '{\'btn\' : \'actions\'}',
      text     : 'Actions',
      cssClass : 'btn-menu'
    });

    return buttons;
  }

  private addNewMenu() {

    let menu = [
      {id: 'sub-one',   text: 'Sub One',   data: '{\'menu\': \'pie\'}'},
      {id: 'sub-two',   text: 'Sub Two',   data: '{\'menu\': \'line\'}'},
      {id: 'sub-three', text: 'Sub Three', data: '{\'menu\': \'bubble\'}'}
    ];

    this.buttons[this.buttons.length - 1].menu = menu;
  }

  private updated() {
    this.sohoToolbar.updated();
  }
}

interface ToolbarButton {
    id       ?: string;
    cssClass ?: string;
    text     ?: string;
    icon     ?: string;
    data     ?: string;
    menu     ?: any;
}

interface SearchField {
    id    ?: string;
    label ?: string;
    data  ?: string;
}