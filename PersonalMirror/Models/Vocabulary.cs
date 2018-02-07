using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace PersonalMirror.Models {
    public abstract class Vocabulary {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
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