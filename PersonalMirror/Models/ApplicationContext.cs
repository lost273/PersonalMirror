using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PersonalMirror.Models {
    public class ApplicationContext : IdentityDbContext<ApplicationUser> {
        public ApplicationContext() : base("IdentityDbConnection") { }

        public static ApplicationContext Create() {
            return new ApplicationContext();
        }
    }
}