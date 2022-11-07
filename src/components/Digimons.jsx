import React from "react";
import { connect } from "react-redux";
import{ getDigimons } from '../redux/actions'
import Digimon from "./Digimon";
import '../style/Display.css'
class Digimons extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getDigimons();
    
  }

  render() {
    return (
      <div className="body">
        
        
          {
            
              this.props.digimons.map(
                
                  (digimon)=><Digimon
                    name={digimon.name}
                    level={digimon.level}
                    img={digimon.img}
                  />
                
              )
            
          }
        
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    digimons: state.digimons,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDigimons: () => dispatch(getDigimons()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Digimons);
