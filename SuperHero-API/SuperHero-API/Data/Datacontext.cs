using Microsoft.EntityFrameworkCore;

namespace SuperHero_API.Data
{
    public class Datacontext: DbContext
    {
        public Datacontext(DbContextOptions<Datacontext> options) : base(options)
        { }
            public DbSet<SuperHero> SuperHeroes => Set<SuperHero>();
    }
}
