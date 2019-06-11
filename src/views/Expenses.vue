<template>
<div>
        <v-toolbar flat color="white">
      <v-toolbar-title>My Expenses</v-toolbar-title>
      <v-divider
        class="mx-2"
        inset
        vertical
      ></v-divider>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
    >
      <template v-slot:items="props">
        <td>{{ props.item.name }}</td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="justify-center layout px-0">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
    <v-layout row justify-center>
       <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <!-- <v-btn class="roundIcons" color="primary" v-on="on"><v-icon dark large color="red">fa fa-plus</v-icon></v-btn> -->
        <v-icon class="floatPlus" v-on="on" dark large color="green">fa fa-plus</v-icon>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Expense</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-layout row justify-center>
                    <v-flex xs12 sm12 md10>
                        <v-menu
                            ref="menu"
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            :return-value.sync="date"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            min-width="200px"
                            max-height="250px"
                        >
                            <template v-slot:activator="{ on }">
                            <v-text-field
                                v-model="date"
                                slot="activator"
                                label="Date of Expense (Click to change date)"
                                prepend-icon="event"
                                readonly
                                v-on="on"
                            ></v-text-field>
                            </template>
                            <v-date-picker v-model="date" no-title scrollable required>
                            <v-spacer></v-spacer>
                            <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                            <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                            </v-date-picker>
                        </v-menu>
                        </v-flex>
                    </v-layout>
                    <v-spacer></v-spacer>
                    <br>
              <v-flex xs12 sm12 md4>
                <v-text-field label="Amount" type="number" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-textarea label="Purpose*" name="input-7-4" required></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
          <small class="red--text" >All fields are required</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</div>

</template>


<script>
  export default {
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        dialog: false,
        headers: [
            { text: 'Date', align: 'left', sortable: true, value: 'name'},
            { text: 'Expenses', value: 'amount' },
            { text: 'Purpose', value: 'purpose' },
            // { text: 'Carbs (g)', value: 'carbs' },
            // { text: 'Protein (g)', value: 'protein' },
            // { text: 'Actions', value: 'name', sortable: false }
        ],
        desserts: [],
        editedIndex: -1,
        editedItem: {
            date: '',
            purpose: '',
            amount: 0,
            // fat: 0,
            // carbs: 0,
            // protein: 0
        },
        defaultItem: {
            date: '',
            purpose: '',
            amount: 0,
            // calories: 0,
            // fat: 0,
            // carbs: 0,
            // protein: 0
        }
    })
  }
</script>