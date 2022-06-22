import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadBubblesPreset } from "tsparticles-preset-bubbles";
import React from "react";

export class ParticlesContainer extends React.PureComponent {
  // this customizes the component tsParticles installation
  async customInit(engine) {
    // this adds the preset to tsParticles, you can safely use the
    await loadBubblesPreset(engine);
  }

  render() {
    const options = {
      preset: "bubbles",
    };

    return <Particles options={options} init={this.customInit} />;
  }
}