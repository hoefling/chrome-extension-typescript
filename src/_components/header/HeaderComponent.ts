import {components, IComponent} from "../../Components";

export class HeaderComponent implements IComponent {

    name: string = 'header';

    tag: string = 'dk-header';

    template = `
        <header>
           this is header
        </header>
        `;

    templateUrl = '';

    constructor() {

    }

    load(el: Element): Promise<any> {
        return components.loadComponent(el, this);
    }

    onLoad() {
        console.log(`onLoad() for component ${this.name}`);
    }


}

components.register(new HeaderComponent());
