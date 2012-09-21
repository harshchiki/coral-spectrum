CUI.Widget = new Class(/** @lends CUI.Widget# */{
  /**
   * Base widget class
   *
   * @constructs
   *
   * @param {Object} options  Widget options
   */
  construct: function(options) {
    // Store options
    this.options = $.extend({}, options);
    
    // Store jQuery object
    this.$element = $(options.element);
    
    // Bind functions commonly called by listeners
    this.bind(this.hide);
    this.bind(this.show);
    this.bind(this.toggleVisibility);
    
    // Show/hide when this.options.visible changes
    this.on('change:visible', function(evt) {
      this[evt.value ? '_show' : '_hide']();
    }.bind(this));
    
    if (this.options.visible) {
      // Initial show
      this.options.visible = false;
      this.show();
    }
  },

  /**
   * Set an option
   *
   * @param {Mixed} optionOrObj     The option 
   * @param {String} func           The function that will be called when the event is triggered
   *
   * @returns {CUI.Widget} this, chainable
   */
  set: function(optionOrObj, value) {
    if ($.isPlainObject(optionOrObj)) {
      // Set multiple options
      for (var option in optionOrObj) {
        this._set(option, optionOrObj[option]);
      }
    }
    else {
      // Set single option
      this._set(optionOrObj, value);
    }
    
    return this;
  },
  /** @ignore */
  _set: function(option, value) {
    // Don't set if values are identical
    if (this.options[option] === value)
      return this;
    
    // Trigger a change event
    var e = $.Event('beforeChange:'+option, {
      option: option,
      currentValue: this.options[option],
      value: value
    });
    this.$element.trigger(e);
    
    // Don't set if prevented
    if (e.isDefaultPrevented()) return this;
    
    // Set value
    this.options[option] = value;
    
    e = $.Event('change:'+option, {
      option: option,
      value: value
    });
    this.$element.trigger(e);
  },
  
  /**
   * Get the value of an option
   *
   * @param {String} option    The name of the option to fetch the value of
   *
   * @returns {Mixed} Option value
   */
  get: function(option) {
    return this.options[option];
  },
  
  /**
   * Add an event listener
   *
   * @param {String} evtName    The event name to listen for
   * @param {Function} func     The function that will be called when the event is triggered
   *
   * @returns {CUI.Widget} this, chainable
   */
  on: function(evtName, func) {
    this.$element.on.apply(this.$element, arguments);
    return this;
  },
  
  /**
   * Remove an event listener
   *
   * @param {String} evtName    The event name to stop listening for
   * @param {Function} func     The function that was passed to on()
   *
   * @returns {CUI.Widget} this, chainable
   */
  off: function(evtName, func) {
    this.$element.off.apply(this.$element, arguments);
    return this;
  },

  /**
   * Show the widget
   *
   * @returns {CUI.Widget} this, chainable
   */
  show: function(evt) {
    evt = evt || {};
    
    if (this.options.visible)
      return this;
      
    if (!evt.silent) {
      // Trigger event
      var e = $.Event('show');
      this.$element.trigger(e);
    
      // Do nothing if event is prevented or we're already visible
      if (e.isDefaultPrevented()) return this;
    }
    
    this.options.visible = true;
    
    this._show(evt);
    
    return this;
  },
  /** @ignore */
  _show: function(evt) {
    this.$element.show();
  },
  
  /**
   * Hide the widget
   *
   * @returns {CUI.Widget} this, chainable
   */
  hide: function(evt) {
    evt = evt || {};
    
    if (!this.options.visible)
      return this;
    
    if (!evt.silent) {
      // Trigger event
      var e = $.Event('hide');
      this.$element.trigger(e);

      if (e.isDefaultPrevented()) return this;
    }

    this.options.visible = false;
    
    this._hide(evt);

    return this;
  },
  /** @ignore */
  _hide: function(evt) {
    this.$element.hide();
  },
  
  /**
   * Toggle the visibility of the widget
   *
   * @returns {CUI.Widget} this, chainable
   */
  toggleVisibility: function() {
    return this[!this.options.visible ? 'show' : 'hide']();
  }
  
  
  /**
   * Triggered when the widget is shown
   *
   * @name CUI.Widget#show
   * @event
   */
  
  /**
   * Triggered when the widget is hidden
   *
   * @name CUI.Widget#hide
   * @event
   */
   
  /**
   * Triggered when an option is changed
   *
   * @name CUI.Widget#beforeChange:*
   * @event
   *
   * @param {Object} evt                Event object
   * @param {Mixed} evt.option          The option that changed
   * @param {Mixed} evt.currentValue    The current value
   * @param {Mixed} evt.value           The value this option will be changed to
   */
   
  /**
   * Triggered when an option is changed
   *
   * @name CUI.Widget#change:*
   * @event
   *
   * @param {Object} evt          Event object
   * @param {Mixed} evt.option    The option that changed
   * @param {Mixed} evt.value     The new value
   */
});
