<template>
<div class="users">
    <div class="users-container">
        <div class="search-box">
            <i class="material-icons">&#xE8B6;</i>
            <input type="text" class="form-control" placeholder="Search" v-model="search">
        </div> <!-- /search-box -->

        <table class="table">
            <thead>
                <tr>
                    <th>Index</th>
                    <th>Name <a href="#"><i class="fa fa-sort" @click="sort()"></i></a></th>
                    <th>Date Of Birth <a href="#"><i class="fa fa-sort" @click="sort()"></i></a></th>
                    <th>Municipality <a href="#"><i class="fa fa-sort" @click="sort()"></i></a></th>
                    <th>Actions </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>

                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
                <tr>
                    <td>Test</td>
                    <td>TEst 2</td>
                    <td>TEst 3</td>
                    <td>Test 4</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div> <!-- /users -->
</template>

<script>
    export default {
        data () {
            return {
                
            }
        },
        methods: {
            sort() {
                console.log("The Sort Icon Works");
            }
        }
    }
</script>