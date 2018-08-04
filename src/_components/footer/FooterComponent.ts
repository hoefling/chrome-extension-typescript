import {components, IComponent} from "../../Components";

export class FooterComponent implements IComponent {
    name = 'footer';
    tag = 'dk-footer';

    // templateUrl : string = null;
    templateUrl = 'footer/footer.tpl.html';


    template = `
        <footer>
                This is footer and there's some stuff here!
        </footer>`;


    load(element: Element): Promise<any> {
        return components.loadComponent(element, this);
    }

    onLoad() {
        console.log('On loaded FooterComponent');
    }
}

components.register(new FooterComponent());
