(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{145:function(e,o,t){"use strict";t.r(o);var a=t(0),r=Object(a.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"ansible-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ansible-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Ansible configuration")]),t("ol",[t("li",[t("p",[e._v("On the Ansible node, retrieve the latest version of the playbooks using Git.")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# git clone https://github.com/HewlettPackard/Docker-Synergy.git\n")])])]),t("li",[t("p",[e._v("Change to the directory that you just cloned:")]),t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# cd ~/Docker-Synergy\n")])])])]),t("p",[t("strong",[e._v("Note:")]),e._v(" All subsequent file names are relative to the "),t("code",[e._v("Docker-Synergy")]),e._v(" directory. For example "),t("code",[e._v("hosts")]),e._v(" is located in the top-level "),t("code",[e._v("~/Docker-Synergy")]),e._v(" while "),t("code",[e._v("group_vars/all/vars")]),e._v(" corresponds to "),t("code",[e._v("~/Docker-Synergy/groups_vars/all/vars")]),e._v(".")]),t("p",[e._v("You now need to prepare the configuration to match your own environment, prior to deploying Docker EE and the rest of the nodes. To do so, you will need to modify a number of files including:")]),t("ul",[t("li",[t("code",[e._v("site.yml")]),e._v(", the main entry point for the playbooks.")]),t("li",[t("code",[e._v("hosts")]),e._v(", the inventory file.")])]),t("p",[e._v("You also need to create and populate a number of files:")]),t("ul",[t("li",[t("code",[e._v("group_vars/all/vars")]),e._v(", the group variables file.")]),t("li",[t("code",[e._v("group_vars/all/vault")]),e._v(", containing sensitive information that needs to be protected.")]),t("li",[t("code",[e._v("group_vars/all/backups")]),e._v(", containing backup-related variables.")])]),t("p",[e._v("For the latter group, a set of sample files has been provided to help you get started:")]),t("ul",[t("li",[t("code",[e._v("group_vars/all/vars.sample")]),e._v(", a sample group variables file.")]),t("li",[t("code",[e._v("group_vars/all/vault.sample")]),e._v(", a sample vault file.")]),t("li",[t("code",[e._v("group_vars/all/backups.sample")]),e._v(", a sample backup configuration file.")])]),t("p",[e._v("You should work from the "),t("code",[e._v("root")]),e._v(" account for the configuration steps and also later on when you run the playbooks.")])])}],!1,null,null,null);o.default=r.exports}}]);