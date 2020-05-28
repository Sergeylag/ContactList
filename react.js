
// Создаём список контактов
    var CONTACTS = [
      {
        id: 1,
        name: 'Alisa',
        phoneNumber: '+72253324545',
        image: 'https://i.pinimg.com/236x/64/42/81/644281ae98e1f5b188d7b37dbae5d784--jennifer-lawrence-haircut-jennifer-lawrence-photos.jpg'
      },
      {
        id: 2,
        name: 'Misha',
        phoneNumber: '+72334333541',
        image: 'https://memeguy.com/photos/thumbs/pic-1-artist-combines-celebrity-faces-206611.jpg'
      },
      {
        id: 3,
        name: 'Kiril',
        phoneNumber: '+74534353533',
        image: 'https://j.livelib.ru/charpic/003079/l/83a6/Chili_Palmer.jpg'
      },
      {
        id: 4,
        name: 'Masha',
        phoneNumber: '+78884455622',
        image: 'https://vmnews.ru/img/news/58/c6a2fd72950f.jpg'
      },
    ]
    // Создаём компонет Contact
    var Contact = React.createClass({
      render: function() {
        return <li className="contact">
                  <img className="contact-image" src={this.props.image} width="60px" height="60px"/>
                  <div className="contact-info">
                      <div className="contact-name"> {this.props.name} </div>
                      <div className="contact-number"> {this.props.phoneNumber} </div>
                  </div>
               </li>
      }
    });
    // Создаём лист контактов
    var ContactsList = React.createClass({
        getInitialState: function(){
          return {
            displayedContacts: CONTACTS
          };
        },

        handSe: function(event){
          var searchQuery = event.target.value.toLowerCase();
          var displayedContacts = CONTACTS.filter(function(el){
            var searchValue = el.name.toLowerCase();
            return searchValue.indexOf(searchQuery) !== -1;
          });
          this.setState({
            displayedContacts: displayedContacts
          });
        },

        render: function(){
          return(
            <div className="contacts">
              <input type="text" className="search-field" onChange={this.handSe}/>
              <ul className="contacts-list">
                {
                  this.state.displayedContacts.map(function(el){
                    return <Contact
                      key={el.id}
                      name={el.name}
                      phoneNumber={el.phoneNumber}
                      image={el.image}
                    />;
                  })
                }
              </ul>
            </div>
            );
        }
    });
    ReactDOM.render(
      <ContactsList/>,
      document.getElementById("content")
      );
