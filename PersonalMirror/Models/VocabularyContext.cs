using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace PersonalMirror.Models {
    public class VocabularyContext : DbContext {
        public VocabularyContext() : base("DefaultConnection")  { }
        public DbSet<Word> Words { get; set; }
        public DbSet<PartOfSpeech> PartOfSpeeches { get; set; }
}
}