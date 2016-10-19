describe("MaiorEMenor", function() {
	it("should understand unordered numbers", function() {
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,15,7,9]);
		expect(algoritmo.pegaMaior()).toEqual(15);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

	it("should understand asc ordered numbers", function() {
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([5,6,7,8]);
		expect(algoritmo.pegaMaior()).toEqual(8);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});

	it("should understand desc ordered numbers", function() {
		var algoritmo = new MaiorEMenor();
		algoritmo.encontra([8,7,6,5]);
		expect(algoritmo.pegaMaior()).toEqual(8);
		expect(algoritmo.pegaMenor()).toEqual(5);
	});
});