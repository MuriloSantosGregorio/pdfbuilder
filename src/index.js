import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { maxHeaderSize } from 'http';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF'
  },
  paget: {
    flexDirection: 'row',
    backgroundColor: '#000000',
    color: '#FFFFFF'
    
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  pagina: {
    height: 840,
    width: 594
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page style={styles.page} size={[594,840]}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    <Page style={styles.paget} size={[594,840]}>
      <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    
  </Document>
);

const App = () => (
  <PDFViewer style={styles.pagina}>
    <MyDocument/>
  </PDFViewer>
);

ReactDOM.render(<App />, document.getElementById('root'));