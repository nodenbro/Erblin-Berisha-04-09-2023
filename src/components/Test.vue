<template>
    <div>
        <h1>
        Testing from the Component
        </h1>

        <b-button v-b-modal.modalPopover>Popover Modal</b-button>

        <b-modal id="modalPopover" title="Modal with Popover" ok-only>
        <p>
            This
            <b-button v-b-popover="'Popover inside a modal!'" title="Popover">Button</b-button>
            triggers a popover on click.
        </p>
        <p>
            This <a href="#" v-b-tooltip title="Suck it bitch! hehe">Link</a> will show a tooltip on
            hover.
        </p>
        </b-modal>
        <div>
            <b-img thumbnail fluid src="https://picsum.photos/250/250/?image=54" alt="Image 1"></b-img>
        </div>
    </div>
</template>

