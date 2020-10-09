import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import Cores from '../constantes/Cores';
import ContatoInputTela from '../telas/ContatoInputTela';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';
import DetalhesDoLugarTela from '../telas/DetalhesDoLugarTela';

const Navigator = createStackNavigator({
  ListaDeContatos: ListaDeContatosTela,
  NovoContato: ContatoInputTela,
  DetalhesDoContato: DetalhesDoLugarTela
}, {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Cores.primary
      },
      headerTintColor: '#FFFFFF'
    }
  }
);

export default createAppContainer(Navigator);