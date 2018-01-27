﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalMirror.Controllers {
    public class HomeController : Controller {
        public ActionResult Index() {

            return View();
        }
        public ActionResult SortSelect(string chatMessage) {

            return PartialView("History", chatMessage);
        }

        public ActionResult SortInsert() {
            
            return View();
        }
        public ActionResult SortBubble() {
            
            return View();
        }

        public ActionResult Fifteens() {

            return View();
        }

        public ActionResult Contact() {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}