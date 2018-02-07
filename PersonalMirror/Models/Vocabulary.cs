using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace PersonalMirror.Models {
    public abstract class Vocabulary {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Description { get; set; }
    }
    public class Noun : Vocabulary {
    }
    public class Verb : Vocabulary {
    }
    public class Pronoun : Vocabulary {
    }
    public class Adjective : Vocabulary {
    }
}