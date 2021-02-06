import Vue from "vue"

Vue.filter("prettify", value => JSON.stringify(JSON.parse(value), null, 2));