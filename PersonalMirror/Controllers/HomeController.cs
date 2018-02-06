/*
noun for subjects
pronoun for identify
verb for action
imperative mood for command
====
ST has environment - table, chair and etc.
*/
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalMirror.Controllers {
    public class HomeController : Controller {
        [HttpGet]
        public ActionResult Index() {
            return View();
        }
        [HttpPost]
        public string Index(string message) {
            return "servermessage";
        }
        //identify this is conversation or command
        public bool IsCommand(string text) {
            return false;
        }
    }
}