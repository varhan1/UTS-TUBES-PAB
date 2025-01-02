import React, { useState } from 'react';
import { Button, Center, Text, VStack, Input, Heading, Box, Icon } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

const BMICalculatorMain = ({ navigation }) => {
    const [showInstructions, setShowInstructions] = useState(true);
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState('');
    const [targetBMI, setTargetBMI] = useState('');
    const [targetWeight, setTargetWeight] = useState(null);
    const [targetCategory, setTargetCategory] = useState('');
    const [history, setHistory] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            const timer = setTimeout(() => {
                setShowInstructions(true);
            }, 60000);

            return () => clearTimeout(timer);
        }, [])
    );

    const calculateBMI = () => {
        if (!weight || !height || weight <= 0 || height <= 0) {
            alert('Mohon masukkan berat dan tinggi badan yang valid.');
            return;
        }

        const heightInMeters = height / 100;
        const bmiValue = weight / (heightInMeters * heightInMeters);
        const calculatedBMI = bmiValue.toFixed(2);

        let bmiCategory = '';
        if (bmiValue < 18.5) {
            bmiCategory = 'Berat badan kurang';
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            bmiCategory = 'Berat badan normal';
        } else if (bmiValue >= 25 && bmiValue <= 29.9) {
            bmiCategory = 'Berat badan berlebih';
        } else {
            bmiCategory = 'Obesitas';
        }

        setBmi(calculatedBMI);
        setCategory(bmiCategory);

        // Simpan riwayat BMI
        setHistory(prevHistory => [
            ...prevHistory,
            {
                date: new Date().toLocaleString(),
                bmi: calculatedBMI,
                category: bmiCategory,
            },
        ]);

        if (targetBMI) {
            const targetBMIValue = parseFloat(targetBMI);
            const calculatedTargetWeight = (targetBMIValue * heightInMeters * heightInMeters).toFixed(2);

            setTargetWeight(calculatedTargetWeight);

            // Tentukan kategori untuk target BMI
            let targetBmiCategory = '';
            if (targetBMIValue < 18.5) {
                targetBmiCategory = 'Berat badan kurang';
            } else if (targetBMIValue >= 18.5 && targetBMIValue <= 24.9) {
                targetBmiCategory = 'Berat badan normal';
            } else if (targetBMIValue >= 25 && targetBMIValue <= 29.9) {
                targetBmiCategory = 'Berat badan berlebih';
            } else {
                targetBmiCategory = 'Obesitas';
            }
            setTargetCategory(targetBmiCategory);
        }
    };

    const resetCalculator = () => {
        setWeight('');
        setHeight('');
        setBmi(null);
        setCategory('');
        setTargetBMI('');
        setTargetWeight(null);
        setTargetCategory('');
    };

    if (showInstructions) {
        return (
            <Center flex={1}>
                <VStack space={4} w="75%" mt={4}>
                    <Box bg="white" p={4} borderRadius="lg" shadow={8}>
                        <Heading fontSize="xl" mb="5" color="green.800">
                            Instruksi & Apa itu BMI?
                        </Heading>
                        <Text fontSize="md" mb={1}>
                            <Text fontWeight="bold">BMI (Body Mass Index)</Text> adalah pengukuran yang digunakan untuk
                            menentukan apakah berat badan Anda sesuai dengan tinggi badan Anda. BMI dihitung
                            menggunakan rumus sederhana: berat badan (kg) dibagi tinggi badan (m) kuadrat.
                        </Text>
                        <Text fontSize="md" mb={1}>
                            Berikut langkah-langkah untuk menggunakan kalkulator BMI ini:
                        </Text>
                        <Text fontSize="md" mb={2}>1. Masukkan berat badan Anda dalam kilogram (kg).</Text>
                        <Text fontSize="md" mb={2}>2. Masukkan tinggi badan Anda dalam sentimeter (cm).</Text>
                        <Text fontSize="md" mb={2}>
                            3. Opsional: Masukkan target BMI Anda untuk mengetahui berat badan ideal Anda.
                        </Text>
                        <Text fontSize="md" mb={2}>
                            4. Klik "Hitung BMI" untuk melihat hasil BMI, kategori berat badan Anda, dan berat ideal (jika target BMI diisi).
                        </Text>
                        <Button onPress={() => setShowInstructions(false)} mt={4}>Lanjutkan ke Kalkulator</Button>
                        <Button
                            bg="#FF7043"
                            mt={2}
                            _pressed={{ bg: "#FF7043" }}
                            onPress={() => navigation.goBack()}
                            leftIcon={<Icon as={Ionicons} name="arrow-back" color="white" />}
                        >Kembali</Button>
                    </Box>
                </VStack>
            </Center>
        );
    }

    return (
        <Center flex={1}>
            <VStack space={4} w="75%" mt={4}>
                <Box bg="white" p={5} borderRadius="lg" shadow={8}>
                    <Heading fontSize="xl" mb="5" color="green.800">Kalkulator BMI</Heading>

                    <Text fontSize="15">Masukkan berat badan Anda:</Text>
                    <Input placeholder="Berat badan (kg)" keyboardType="numeric" value={weight} onChangeText={setWeight} />

                    <Text fontSize="15">Masukkan tinggi badan Anda:</Text>
                    <Input placeholder="Tinggi badan (cm)" keyboardType="numeric" value={height} onChangeText={setHeight} />

                    <Text fontSize="15">Masukkan target BMI Anda:</Text>
                    <Input placeholder="Target BMI" keyboardType="numeric" value={targetBMI} onChangeText={setTargetBMI} />

                    <Button mt={10} onPress={calculateBMI}>Hitung BMI</Button>
                    <Button mt={2} colorScheme="secondary" onPress={resetCalculator}>Reset</Button>

                    {bmi && (
                        <>
                            <Text fontSize="lg" mt={4}>BMI Anda: {bmi}</Text>
                            <Text fontSize="lg" fontWeight="bold" color="primary.600">Kategori: {category}</Text>
                            {targetWeight && (
                                <>
                                    <Text fontSize="lg" mt={2}>
                                        Berat Ideal untuk BMI {targetBMI}: {targetWeight} kg
                                    </Text>
                                    <Text fontSize="lg" fontWeight="bold" color="primary.500">
                                        Kategori Target: {targetCategory}
                                    </Text>
                                    <Text fontSize="lg" mt={2}>
                                        Anda perlu {weight > targetWeight ? 'mengurangi' : 'menambah'}{' '}
                                        {Math.abs(weight - targetWeight).toFixed(2)} kg untuk mencapai target BMI.
                                    </Text>
                                    <Button mt={4} onPress={() => navigation.navigate('BMIInfo', { userCategory: category })}>Lihat Tips Kategori</Button>
                                    <Button mt={2} colorScheme="secondary" onPress={() => navigation.navigate('BMIHistory', { history })}>Lihat Riwayat BMI</Button>
                                </>
                            )}
                        </>
                    )}
                </Box>
            </VStack>
        </Center>
    );
};

export default BMICalculatorMain;