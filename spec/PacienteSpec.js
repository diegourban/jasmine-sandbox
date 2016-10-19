describe("Paciente", function() {

	it("should calculate imc", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

		expect(guilherme.imc()).toEqual(72 / (1.82 * 1.82));
	});

	it("should calculate heart beatings", function() {
		var guilherme = new Paciente("Guilherme", 28, 72, 1.82);

		expect(guilherme.batimentos()).toEqual(28 * 365 * 24 * 60 * 80);
	});
});