<template>
<div class="users">

    <Nav />

    <div class="users-container">
        <div class="search-register-bar">
            <div class="search-box">
                <i class="fa fa-search icon" aria-hidden="true"></i>
                <input type="text" class="search-form" placeholder="Search" v-model="search">
                <p></p>
            </div> <!-- /search-box -->

            <div class="register">
                <button class="register-btn" @click="register_modal()">
                    Register New Student
                </button>
            </div><!-- /register -->
        </div> <!-- search-register-bar -->


        <div class="modals-div">
            <b-modal id="modal-1" content-class="shadow" centered title="Register Student" @ok="addStudent()">
                <form ref="form">

                    <!-- Index Input Field -->
                    <b-form-group
                    label="Index"
                    label-for="index-input"
                    >
                        <b-form-input
                            id="index-input"
                            v-model="student.index"
                            disabled
                        ></b-form-input>
                    </b-form-group>

                    <!-- Name Input Field -->
                    <b-form-group
                    label="Name"
                    label-for="name-input"
                    >
                        <b-form-input
                            id="name-input"
                            v-model="student.name"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <!-- DoB Input Field -->
                    <b-form-group
                    label="Date of Birth"
                    label-for="birthdate-input"
                    >
                        <b-form-input
                            id="birthdate-input"
                            type="date"
                            v-model="student.birthday"
                            required
                        ></b-form-input>
                    </b-form-group>

                    <!-- City Input Field -->
                    <b-form-group
                    label="City"
                    label-for="city-input"
                    >
                        <b-form-select
                        class="form-select"
                        v-model="student.city"
                        :options="cities">
                        </b-form-select>
                    </b-form-group>
                </form>
            </b-modal>
        </div> <!-- modals-div -->


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
                <tr v-for="student in students.slice(0,9)" :key="student.id">
                    <td>{{ student.index }}</td>
                    <td>{{ student.name}}</td>
                    <td>{{ student.birthday}}</td>
                    <td>{{ student.city}}</td>
                    <td class="actions-column">
                        <a class="view" title="View" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                        <a class="edit" title="Edit" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                        <a class="delete" title="Delete" v-b-modal.modal data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                    </td>
                </tr>
                <!-- <tr>
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
                </tr> -->
            </tbody>
        </table>
    </div> <!-- users-container -->
</div> <!-- /users -->
</template>

<script>
    import Nav from "../components/Nav.vue"

    export default {
        components: {
            Nav
        },
        data () {
            return {
                students: JSON.parse(localStorage.getItem('Students')) || [],
                student: {
                    index: 0,
                    name:"",
                    birthday:"",
                    city:""
                },
                search: "",
                cities: [
                    { value: 'Prishtina', text: 'Prishtina' },
                    { value: 'Prizren', text: 'Prizren' },
                    { value: 'Ferizaj', text: 'Ferizaj' },
                    { value: 'Podujeva', text: 'Podujeva' },
                    { value: 'Gjilan', text: 'Gjilan' }
                ]
            }

        },
        methods: {
            sort() {
                console.log("The Sort Icon Works");
            },
            register_modal() {
                console.log("Register Button Pressed!");
                this.$bvModal.show("modal-1");
            },
            addStudent () {
                this.student.index = this.students.length + 1;
                this.students.push(this.student);
                localStorage.setItem('Students', JSON.stringify(this.students));
                console.log(this.students.length);
                location.reload();
            }
        }
    }
    
</script>