describe("Paciente", function() {

	it("should calculate imc", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

		expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
	});
});