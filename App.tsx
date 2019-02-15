import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

interface Props {

}

interface State {
  totalBill: string,
  tipPercentage: number
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      totalBill: '',
      tipPercentage: .15
    }
  }

  handleInput = (text: string) :void => {
    this.setState({
      totalBill: text
    })
  }

  render() {
    let tip = '0.00';
    let tipPercentages = [0.1, 0.15, 0.18, 0.2, 0.3];
    if (this.state.totalBill) {
      let tipCalc = (parseFloat(this.state.totalBill) * (this.state.tipPercentage));
      tip = (Math.round(tipCalc * 100) / 100).toFixed(2);
    }

    return (
      <View style={styles.container}>
        <Text>${tip}</Text>
        <TextInput 
          onChangeText={this.handleInput}
          value={this.state.totalBill}
          style={styles.input}
          placeholder="$0.00"
          keyboardType="number-pad"
        />
        <View style={styles.tipButtons}>
          {tipPercentages.map((percent, index) => (
            <Button 
              key={index}
              title={tipPercentages[index] * 100 + '%'} 
              onPress={() => this.setState({ tipPercentage: tipPercentages[index]})}
            />
          ))
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20

  },
  tipButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20
  },
  input: { 
    borderWidth: 1,
    padding: 5,
    height: 40,
    width: '100%'
  }
});
