// Component loader class
class ComponentLoader {
    constructor() {
        this.components = new Map();
    }
    async registerComponent(name, templatePath, stylePath) {
        try {
            // Fetch the component template
            const templateResponse = await fetch(templatePath);
            const template = await templateResponse.text();

            // Create and register the component
            customElements.define(name, class extends HTMLElement {
                constructor() {
                    super();
                    this.innerHTML = template;
                }

                connectedCallback() {
                    // Load styles if provided
                    if (stylePath) {
                        const link = document.createElement('link');
                        link.rel = 'stylesheet';
                        link.href = stylePath;
                        document.head.appendChild(link);
                    }
                }
            });

            this.components.set(name, { template, stylePath });
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
        }
    }
}

// Create component loader instance
const componentLoader = new ComponentLoader();

// Register the navbar component
componentLoader.registerComponent(
    'navbar-component',
    '/components/navbar/navbar.html',
    '/css/components/navbar.css'
);
