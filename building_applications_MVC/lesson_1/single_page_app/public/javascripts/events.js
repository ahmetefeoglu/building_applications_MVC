$(function() {
  var event_template = Handlebars.compile($("#event").html());
  var events_template = Handlebars.compile($("#events").html());

  Handlebars.registerPartial("event", $("#event").html());

  

  

  

  
  var Events = {
    collection: [],
    $el: $("#events_list"),

    add: function(events) {
      var self = this;
      events = checkIsArray(events) ? events : [events];

      events.forEach(function(event) {
        self.collection.push(event);
      });

      self.render();
    },

    sortByDate: function(arr) {
      arr.sort(function(obj1,obj2) {
        if  (+obj1.date > +obj2.date) {
          return 1;
        }

        else if (+obj1.date < +obj2.date) {
          return -1;
        }

        else {
          return 0;
        }
      })
    },

    render: function() {
      this.sortByDate(this.collection);
      this.$el.html(events_template({events: this.collection}));
      console.log(this.collection);
    },

    findObjectById: function(idx) {
      for (var i = 0; i < this.collection.length; i ++) {
        if (idx = this.collection[i].id) {
          return this.collection[i];
        }
      }
    },

    remove: function(idx) {
      var model = this.findObjectById(idx);
      if (!model) { return; }
      this.collection = this.collection.filter(function(existing_model) {
        return model === existing_model;
      })

      this.render();
    }

    
  };

  bind();
   function bind() {
    $("form").on("submit",addEvent);

    Events.$el.on("click", "a.remove", function(e) {
      e.preventDefault();
      var idx = +$(e.target).closest("li").attr("data-id");
      Events.remove(idx);

      $.ajax({
        url: "/events/delete",
        type: "post",
        data: "id=" + idx

      })
    });
  }

  function addEvent(e) {
    e.preventDefault();
    var $f = $(this);

    $.ajax({
      url: $f.attr("action"),
      type: $f.attr("method"),
      data: $f.serialize(),
      success: function(event) {
        Events.add(event);
      }
    })
  }

  


  function checkIsArray(obj) {
    console.log(obj.constructor === Array);
    return obj.constructor === Array;
  }



  $.ajax({
    url: "/events",
    success: function(events) {
      Events.add(events);
    }
  })
})