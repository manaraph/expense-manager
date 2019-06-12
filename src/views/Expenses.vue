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
        <td>{{ props.item.id }}</td>
        <td class="text-xs-left">{{ props.item.date }}</td>
        <td class="text-xs-left">{{ props.item.amount }}</td>
        <td class="text-xs-left">{{ props.item.purpose }}</td>
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
          <!-- <span class="headline">Add Expense</span> -->
          <span class="headline">{{ formTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-layout row justify-center>
                    <v-flex xs12>
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
              <v-flex xs12 sm6 md6>
                <v-text-field v-model="editedItem.amount" label="Amount" type="number" required xs12 sm12 md6></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md6 d-flex><v-select :items="currency" label="Select Currency" box></v-select></v-flex>
              <v-flex><v-chip xs12 sm12 md12 label >Total Amount Spent (With Tax): <span class="red--text title" id="taxedAmount"> {{computeTaxedAmount()}}</span></v-chip></v-flex>
              <v-flex xs12 sm12 md12>
                <v-textarea v-model="editedItem.purpose" label="Purpose*" name="input-7-4" required></v-textarea>
              </v-flex>
            </v-layout>
          </v-container>
          <small class="red--text" >All fields are required</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="save()">Save</v-btn>
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
            { text: 'S/N', align: 'center', value: 'name'},
            { text: 'Date', align: 'left', sortable: true, value: 'name'},
            { text: 'Expenses', value: 'amount' },
            { text: 'Purpose', align: 'left', value: 'purpose' },
            
        ],
        desserts: [],
        currency: ['Naira', 'Pound', 'Dollar', 'Euro'],
        editedIndex: -1,
        editedItem: {
          id: 1,
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
    }),

      computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Expense' : 'Edit Expense'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            id: 1,
            date: '2019-06-10',
            amount: 159,
            purpose: 'Clothing',
            
          },
          {
            id: 2,
           date: '2019-06-09',
            amount: 115,
            purpose: 'Education',
          },
          {
            id: 3,
            date: '2019-06-08',
            amount: 364,
            purpose: 'Food',
          },
         
        ]
      },

      computeTaxedAmount(){
        let tax = parseFloat((this.editedItem.amount * 0.2).toFixed(2));    
        return parseFloat(this.editedItem.amount) + tax;
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        const index = this.desserts.indexOf(item)
        confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        /* eslint-disable */
        this.editedItem.id = this.desserts[this.desserts.length-1].id + 1;
        this.editedItem.date = this.date;
        
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      }
    }
  }
    
</script>