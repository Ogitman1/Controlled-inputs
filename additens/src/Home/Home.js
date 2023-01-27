import e from "express-status-monitor";
import { useState } from "react";

function Home(){
    const [firstname, setFirstname] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([])

    const handleclick = (e) => {
        e.preventDefault();
        if (firstname && email){
            const person = { email: email, firstname: firstname}
            setPeople((people)=>{
                const { email, firstname} = people;
                return [...people, person ]

            
      setFirstName('');
      setEmail('');
                })
            })

        }
        else{
            console.error("Inválido")
        }
        //console.log("Loguei ;)")
    }
    return (
        <article>
            <form onSubmit={handleclick}>
                <div>
                    <label htmlFor="Email:">Email</label>
                    <input type="text" id="email" name="email" value={email}
                    onChange={((e) => {
                        setEmail(e.target.value)
                    })}
                    >
                    
                    </input>
                </div>
                <div>
                    <label htmlFor="Name:">Name</label>
                    <input type="text" id="Name" name="Name" value={firstname}
                    onChange = {((e)=> {
                        setFirstname(e.target.value);


                    })} >
                    
                    </input>
                </div>
            </form>
            {people.map((person, index) => {
          const { id, firstName, email } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
        })}
        </article>
    )
}

export default Home;
