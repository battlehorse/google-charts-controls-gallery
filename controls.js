var controls = (function() {
  var stringFilter, horizontalRangeFilter, verticalRangeFilter, 
      labellessRangeFilter, singleSelectPicker, singleComboPicker,
      multiPickers;
      
  var load = function() {
    // The data are unused in this demo. Just create a placeholder table.
    var data = google.visualization.arrayToDataTable([
      ['Language', 'Range'],
      ['Riccardo', 1]
    ]);
  
    // StringFilter instance
    stringFilter = new google.visualization.ControlWrapper({
      'controlType': 'StringFilter',
      'dataTable': data,
      'options': {'filterColumnIndex': 0}
    });
  
    // RangeFilter instances
    horizontalRangeFilter = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'dataTable': data,
      'options': {
        'filterColumnIndex': 1,
        'minValue': 0,
        'maxValue': 100,
        'ui': {
          'orientation': 'horizontal',
          'showRangeValues': true
        }
      },
      'state': {'lowValue': 10, 'highValue': 60}
    });
  
    verticalRangeFilter = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'dataTable': data,
      'options': {
        'filterColumnIndex': 1,
        'minValue': 5000,
        'maxValue': 10000,
        'ui': {
          'orientation': 'vertical',
          'showRangeValues': true
        }
      },
      'state': {'lowValue': 6000, 'highValue': 8000}
    });
  
    labellessRangeFilter = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'dataTable': data,
      'options': {
        'filterColumnIndex': 1,
        'minValue': 0,
        'maxValue': 100,
        'ui': {
          'orientation': 'horizontal',
          'showRangeValues': false,
          'label': ''
        }
      },
      'state': {'lowValue': 10, 'highValue': 60}
    });
  
    // CategoryPicker instances, single selection
    singleSelectPicker = new google.visualization.ControlWrapper({
      'controlType': 'CategoryFilter',
      'dataTable': data,
      'options': {
        'filterColumnIndex': 0,
        'values': ['Java', 'Javascript', 'C++', 'Scala', 'Erlang'],
        'ui': {
          'allowTyping': false,
          'allowMultiple': false
        }
      }
    });
  
    singleComboPicker = new google.visualization.ControlWrapper({
      'controlType': 'CategoryFilter',
      'dataTable': data,
      'options': {
        'filterColumnIndex': 0,
        'values': ['Java', 'Javascript', 'C++', 'Scala', 'Erlang'],
        'ui': {
          'allowTyping': true,
          'allowMultiple': false
        }
      }
    });
  
    // CategoryPicker instances. Multiple selection
    multiPickers = [
      {'layout': 'aside',
       'typing': false
      },
      {'layout': 'below',
      'typing': false
      },
      {'layout': 'belowWrapping',
       'typing': true
      },
      {'layout': 'belowStacked',
       'typing': true}
    ];
    for (var i = 0; i < multiPickers.length; i++) {
      multiPickers[i].picker = new google.visualization.ControlWrapper({
        'controlType': 'CategoryFilter',
        'dataTable': data,
        'options': {
          'filterColumnIndex': 0,
          'values': ['Java', 'Javascript', 'C++', 'Scala', 'Erlang'],
          'ui': {
            'allowTyping': multiPickers[i].typing,
            'allowMultiple': true,
            'selectedValuesLayout': multiPickers[i].layout
          }
        },
        'state': {'selectedValues': ['C++', 'Erlang', 'Javascript']}
      });
    }
  };
  
  return {
    load: load,
    drawStringFilter: function(containerId) {
      stringFilter.draw(containerId);
    },
    drawHorizontalRangeFilter: function(containerId) {
      horizontalRangeFilter.draw(containerId);
    },
    drawVerticalRangeFilter: function(containerId) {
      verticalRangeFilter.draw(containerId);
    },
    drawLabellessRangeFilter: function(containerId) {
      labellessRangeFilter.draw(containerId);
    },
    drawSingleSelectPicker: function(containerId) {
      singleSelectPicker.draw(containerId);
    },
    drawSingleComboPicker: function(containerId) {
      singleComboPicker.draw(containerId);
    },
    drawMultiAsideSelectPicker: function(containerId) {
      multiPickers[0].picker.draw(containerId);
    },
    drawMultiBelowSelectPicker: function(containerId) {
      multiPickers[1].picker.draw(containerId);
    },
    drawMultiBelowWrappingComboPicker: function(containerId) {
      multiPickers[2].picker.draw(containerId);
    },
    drawMultiBelowStackedComboPicker: function(containerId) {
      multiPickers[3].picker.draw(containerId);
    }
  };
})();