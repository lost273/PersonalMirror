using PersonalMirror.Models;
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
    }
}