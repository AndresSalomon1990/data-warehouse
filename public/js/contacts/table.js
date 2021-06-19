const $table = $('#contacts-table')

// initialize the contacts table when the export type select change 
$(function() {
  $('#toolbar').find('select').change(function () {
    $table.bootstrapTable('destroy').bootstrapTable({
      exportDataType: $(this).val(),
      exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
      columns: [
        {
          field: 'state',
          checkbox: true,
          visible: $(this).val() === 'selected'
        },
        {
          field: '_id',
          title: 'ID',
          visible: false,
          searchable: false,
          switchable: false
        },
        {
          field: 'name',
          title: 'Nombre',
          sortable: true
        },
        {
          field: 'lname',
          title: 'Apellido',
          sortable: true
        },
        {
          field: 'email',
          title: 'Email',
          sortable: true
        },
        {
          field: 'company.name',
          title: 'Compañía',
          sortable: true
        },
        {
          field: 'position',
          title: 'Cargo',
          sortable: true
        },
        {
          field: 'region.name',
          title: 'Región',
          sortable: true
        },
        {
          field: 'country.name',
          title: 'País',
          sortable: true,
          visible: false
        },
        {
          field: 'city.name',
          title: 'Ciudad',
          sortable: true
        },
        {
          field: 'address',
          title: 'Dirección',
          sortable: true,
          visible: false
        },
        {
          field: 'interest',
          title: 'Interés',
          sortable: true,
          formatter: 'interestFormatter'
        },
        {
          field: 'contact_channels',
          title: 'Canales de contacto',
          sortable: true,
          formatter: 'contactChannelFormatter'
        },
        {
          field: 'operate',
          title: 'Acciones',
          sortable: false,
          formatter: 'operateFormatter',
          events: 'operateEvents'
        }
      ]
    })
  }).trigger('change')
})

// AJAX request to fill the contacts table
function ajaxRequest(params) {
  const url = '/contacts/all';
  $.get(url).then(function (res) {
    params.success(res);
  });
};

// Operators for edit and remove
function operateFormatter(value, row, index) {
  return [
    '<a class="edit waves-effect waves-light btn modal-trigger" href="#edit-contact-modal" title="Editar">',
    '<i class="material-icons">create</i>',
    '</a>  ',
    '<a class="remove waves-effect waves-light btn modal-trigger red accent-2" href="#delete-contact-modal" title="Eliminar">',
    '<i class="material-icons">clear</i>',
    '</a>'
  ].join('');
};

// asign functionality to operators
window.operateEvents = {
  'click .edit': function (e, value, row, index) {
    EDIT_CONTACT_VARS.id = row._id; // catch the contact id to update their info
    EDIT_CONTACT_VARS.form.name.value = row.name;
    EDIT_CONTACT_VARS.form.lname.value = row.lname;
    EDIT_CONTACT_VARS.form.email.value = row.email;
    EDIT_CONTACT_VARS.form.position.value = row.position;
    EDIT_CONTACT_VARS.form.address.value = row.address;
    EDIT_CONTACT_VARS.form.interest.value = row.interest;

    let i = 0;
    for (i; i < row.contact_channels.length; i++) {
      switch (row.contact_channels[i].name) {
        case 'Whatsapp':
          EDIT_CONTACT_VARS.form.userAccountWhatsapp.value = row.contact_channels[i].user_account;
          EDIT_CONTACT_VARS.form.preferenceWhatsapp.value = row.contact_channels[i].preference;
          $('#edit-user-preference-whatsapp').formSelect();
          break;
        case 'Facebook':
          EDIT_CONTACT_VARS.form.userAccountFacebook.value = row.contact_channels[i].user_account;
          EDIT_CONTACT_VARS.form.preferenceFacebook.value = row.contact_channels[i].preference;
          $('#edit-user-preference-facebook').formSelect();
          break;
        case 'Instagram':
          EDIT_CONTACT_VARS.form.userAccountInstagram.value = row.contact_channels[i].user_account;
          EDIT_CONTACT_VARS.form.preferenceInstagram.value = row.contact_channels[i].preference;
          $('#edit-user-preference-instagram').formSelect();
          break;
        case 'Twitter':
          EDIT_CONTACT_VARS.form.userAccountTwitter.value = row.contact_channels[i].user_account;
          EDIT_CONTACT_VARS.form.preferenceTwitter.value = row.contact_channels[i].preference;
          $('#edit-user-preference-twitter').formSelect();
          break;
        default:
          break;
      };
    };
    

    /* fill selects for the first click */
    // company
    fillCompanySelect(EDIT_CONTACT_VARS.companySelect, row.company.name);

    // region
    fillRegionSelect(EDIT_CONTACT_VARS.regionSelect, row.region.name);
    
    // the setTimeouts are necessary because the page loads faster than the selects filling up and getting the ids
    setTimeout(() => {
      // country
      const regionId = document.getElementById(EDIT_CONTACT_VARS.regionSelect).value;
      fillCountrySelect(EDIT_CONTACT_VARS.countrySelect, EDIT_CONTACT_VARS.citySelect, regionId, row.country.name);
    }, 500);
    
    setTimeout(() => {
      // city
      const regionId = document.getElementById(EDIT_CONTACT_VARS.regionSelect).value;
      const countryId = document.getElementById(EDIT_CONTACT_VARS.countrySelect).value;
      fillCitySelect(EDIT_CONTACT_VARS.citySelect, regionId, countryId, row.city.name);
    }, 1000);
    
    /* fill selects on change */
    document.getElementById(EDIT_CONTACT_VARS.regionSelect).addEventListener('change', () => {
      const regionId = document.getElementById(EDIT_CONTACT_VARS.regionSelect).value;

      fillCountrySelect(EDIT_CONTACT_VARS.countrySelect, EDIT_CONTACT_VARS.citySelect, regionId, row.country.name);
    });

    document.getElementById(EDIT_CONTACT_VARS.countrySelect).addEventListener('change', () => {
      const regionId = document.getElementById(EDIT_CONTACT_VARS.regionSelect).value;
      const countryId = document.getElementById(EDIT_CONTACT_VARS.countrySelect).value;

      fillCitySelect(EDIT_CONTACT_VARS.citySelect, regionId, countryId, row.city.name);
    });

  },
  'click .remove': function (e, value, row, index) {
    DELETE_CONTACT_VARS.id = row._id; // catch the contact id to delete it
    DELETE_CONTACT_VARS.deleteContactEmailConfirmation.innerText = row.email;
  }
};

// format contact channels as badges
function contactChannelFormatter(value, row, index) {
  let contactChannels = '';
  let i = 0;
  for (i; i < value.length; i++) {
    switch (value[i].name) {
      case 'Whatsapp':
        contactChannels += `<span class="new badge green accent-4" data-badge-caption="" title="${value[i].user_account} | ${value[i].preference}" style="cursor: help;">${value[i].name}</span> `;
        break;
      case 'Facebook':
        contactChannels += `<span class="new badge blue darken-1" data-badge-caption="" title="${value[i].user_account} | ${value[i].preference}" style="cursor: help;">${value[i].name}</span> `;
        break;
      case 'Instagram':
        contactChannels += `<span class="new badge orange darken-1" data-badge-caption="" title="${value[i].user_account} | ${value[i].preference}" style="cursor: help;">${value[i].name}</span> `;
        break;
      case 'Twitter':
        contactChannels += `<span class="new badge light-blue accent-3" data-badge-caption="" title="${value[i].user_account} | ${value[i].preference}" style="cursor: help;">${value[i].name}</span> `;
        break;
      default:
        break;
    };
  };

  return contactChannels;
};

// format interest as a bar
function interestFormatter(value, row, index) {
  let interest = '';

  switch (value) {
    case 25:
      interest = `<span style="display: inline">${value}%</span>
                  <div class="progress">
                    <div class="determinate" style="width: ${value}%"></div>
                  </div>`;
      break;
    case 50:
      interest = `<span style="display: inline">${value}%</span>
                  <div class="progress">
                    <div class="determinate amber" style="width: ${value}%"></div>
                  </div>`;
      break;
    case 75:
      interest = `<span style="display: inline">${value}%</span>
                  <div class="progress">
                    <div class="determinate orange" style="width: ${value}%"></div>
                  </div>`;
      break;
    case 100:
      interest = `<span style="display: inline">${value}%</span>
                  <div class="progress">
                    <div class="determinate red" style="width: ${value}%"></div>
                  </div>`;
      break;
    default:
      break;
  };

  return interest;
};

// custom button to remove selected contacts
function buttons () {
  return {
    btnDeleteSelected: {
      text: 'Delete contacts',
      icon: '<i class="material-icons">delete</i>',
      event: function () {
        $('#delete-many-contact-modal').modal('open'); // open the modal to confirm the delete action
      },
      attributes: {
        title: 'Borrar contactos seleccionados',
        style: 'background-color: #f44336;',
        id: 'delete-selected-button',
        disabled: 'true',
        class: 'waves-effect waves-light'
      }
    }
  };
};

/* Confirm the delete action of all contacts selected */
DELETE_CONTACT_VARS.deleteManyContactsButton.addEventListener('click', () => {
  const selection = $table.bootstrapTable('getSelections');
  let i = 0;
  let contactIds = [];
  for (i; i < selection.length; i++) {
    contactIds.push(selection[i]._id);
  };
  deleteManyContacts(contactIds);
});

/* Events to fill the number of contacts selected */
$table.on('check.bs.table', function (e, row, $element) {
  const deleteSelectedButton = document.getElementById('delete-selected-button');
  const spanRowsSelected = document.getElementById('rows-selected');

  if ($table.bootstrapTable('getSelections').length > 0) {
    spanRowsSelected.style.display = 'block'
    deleteSelectedButton.disabled = false;
  } else {
    spanRowsSelected.style.display = 'none'
    deleteSelectedButton.disabled = true;
  };

  spanRowsSelected.innerText = $table.bootstrapTable('getSelections').length;
});

$table.on('uncheck.bs.table', function (e, row, $element) {
  const deleteSelectedButton = document.getElementById('delete-selected-button');
  const spanRowsSelected = document.getElementById('rows-selected');

  if ($table.bootstrapTable('getSelections').length > 0) {
    spanRowsSelected.style.display = 'block'
    deleteSelectedButton.disabled = false;
  } else {
    spanRowsSelected.style.display = 'none'
    deleteSelectedButton.disabled = true;
  };

  spanRowsSelected.innerText = $table.bootstrapTable('getSelections').length;
});