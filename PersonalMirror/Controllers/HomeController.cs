using PersonalMirror.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PersonalMirror.Controllers {
    public class HomeController : Controller {
        static ChatModel chatModel;
        public ActionResult Index(string chatMessage) {
            try {
                if (chatModel == null) chatModel = new ChatModel();

                //leave only 10 messages
                if (chatModel.Messages.Count > 100)
                    chatModel.Messages.RemoveRange(0, 90);

                // if simple request
                if (!Request.IsAjaxRequest()) {
                    return View(chatModel);
                }
                else {
                    
                    // add new message
                    if (!string.IsNullOrEmpty(chatMessage)) {
                        chatModel.Messages.Add(new ChatMessage() {
                            Text = chatMessage,
                            Date = DateTime.Now
                        });
                    }

                    return PartialView("History", chatModel);
                }
            }
            catch (Exception ex) {
                Response.StatusCode = 500;
                return Content(ex.Message);
            }
        }

        public ActionResult SortSelect() {
            return View();
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